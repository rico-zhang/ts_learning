import { Button, Input, message, Popconfirm, Switch, Table } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table/interface';
import React, { useEffect } from 'react';
import { SwitchType } from '../services/CommonTypes';
import { IMovie } from '../services/MoviceService';
import { IMovieState } from '../store/reducers/MovieReducer';
import defaultposterImg from '../assets/defaultposter.png';
import { SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export interface IMovieTableEvents {
  onLoad: () => void;
  onSwitchChange: (type: SwitchType, newState: boolean, id: string) => void;
  onDelete: (id: string) => Promise<void>;
  onChange: (newPage: number) => void;
  onKeyChange: (key: string) => void;
  onSearch: () => void;
}

const MovieTable: React.FC<IMovieState & IMovieTableEvents> = (props) => {
  const { onLoad } = props;
  useEffect(() => {
    onLoad();
  }, [onLoad]);
  function getFilterDropDown(p: any) {
    return (
      <div style={{ padding: 8 }}>
        <Input
          style={{ width: 188, marginBottom: 8, display: 'block' }}
          value={props.condition.key}
          onChange={(e) => props.onKeyChange(e.target.value)}
          onPressEnter={props.onSearch}
        />
        <Button
          type="primary"
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
          onClick={props.onSearch}
        >
          搜索
        </Button>
        <Button
          size="small"
          style={{ width: 90 }}
          onClick={() => {
            props.onKeyChange('');
            props.onSearch();
          }}
        >
          重置
        </Button>
      </div>
    );
  }

  const getColums: () => ColumnsType<IMovie> = () => {
    return [
      {
        title: '封面',
        dataIndex: 'poster',
        render: (poster) => {
          if (poster) {
            return <img alt="" className="tablePoster" src={poster} />;
          } else {
            return (
              <img alt="" className="tablePoster" src={defaultposterImg} />
            );
          }
        },
      },
      {
        title: '名称',
        dataIndex: 'name',
        filterDropdown: getFilterDropDown,
        filterIcon: <SearchOutlined />,
      },
      {
        title: '地区',
        dataIndex: 'areas',
        render: (text: string[]) => {
          return text.join(', ');
        },
      },
      {
        title: '类型',
        dataIndex: 'types',
        render: (text: string[]) => {
          return text.join(', ');
        },
      },
      {
        title: '时长',
        dataIndex: 'timeLong',
        render(timeLong) {
          return timeLong + '分钟';
        },
      },
      {
        title: '正在热映',
        dataIndex: 'isHot',
        render: (isHot, record) => {
          return (
            <Switch
              checked={isHot}
              onChange={(newVal) => {
                props.onSwitchChange(SwitchType.isHot, newVal, record._id!);
              }}
            />
          );
        },
      },
      {
        title: '即将上映',
        dataIndex: 'isComing',
        render: (isHot, record) => {
          return (
            <Switch
              checked={isHot}
              onChange={(newVal) => {
                props.onSwitchChange(SwitchType.isComing, newVal, record._id!);
              }}
            />
          );
        },
      },
      {
        title: '经典影片',
        dataIndex: 'isClassic',
        render: (isHot, record) => {
          return (
            <Switch
              checked={isHot}
              onChange={(newVal) => {
                props.onSwitchChange(SwitchType.isClassic, newVal, record._id!);
              }}
            />
          );
        },
      },
      {
        title: '操作',
        dataIndex: '_id',
        render: (id: string) => {
          return (
            <div>
              <NavLink to={'/movie/edit/' + id}>
                <Button type="primary" size="small">
                  编辑
                </Button>
              </NavLink>
              <Popconfirm
                title="确定要删除吗?"
                onConfirm={async () => {
                  await props.onDelete(id);
                  message.success('删除成功');
                }}
                okText="确定"
                cancelText="取消"
              >
                <Button danger size="small">
                  删除
                </Button>
              </Popconfirm>
            </div>
          );
        },
      },
    ];
  };

  function getPageConfig(): TablePaginationConfig | false {
    if (props.total === 0) {
      return false;
    }
    return {
      current: props.condition.page,
      pageSize: props.condition.limit,
      total: props.total,
    };
  }

  function handleChange(pagination: TablePaginationConfig) {
    props.onChange(pagination.current!);
  }

  return (
    <div>
      <Table<IMovie>
        rowKey="_id"
        dataSource={props.data}
        loading={props.isLoading}
        columns={getColums()}
        pagination={getPageConfig()}
        onChange={handleChange}
        scroll={{ y: 580 }}
      ></Table>
    </div>
  );
};

export default MovieTable;
