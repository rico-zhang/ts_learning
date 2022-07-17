enum Permission {
  Read = 1, //0001
  Write = 2, //0010
  Create = 4, //0100
  Delete = 8, //1000
}

//添加权限
let p: Permission = Permission.Create | Permission.Write;

//判断权限
function hasPerssion(target: Permission, per: Permission) {
  return (target & per) === per;
}

//删除权限
p = p ^ Permission.Write;
