var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Descriptor_1 = require("./Descriptor");
let Article = class Article {
    constructor() {
        this.title = 'umi4发布了';
        this.content = '重磅更新';
        this.date = new Date();
    }
    sayHello() { }
    static getInstance() { }
};
Article.tt = 'yy';
__decorate([
    (0, Descriptor_1.decriptor)('标题2'),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, Descriptor_1.decriptor)('内容2'),
    __metadata("design:type", String)
], Article.prototype, "content", void 0);
__decorate([
    (0, Descriptor_1.decriptor)('日期2'),
    __metadata("design:type", Date)
], Article.prototype, "date", void 0);
__decorate([
    (0, Descriptor_1.decriptor)('打招呼2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Article.prototype, "sayHello", null);
__decorate([
    (0, Descriptor_1.decriptor)('静态测试2'),
    __metadata("design:type", String)
], Article, "tt", void 0);
__decorate([
    (0, Descriptor_1.decriptor)('获取实例2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Article, "getInstance", null);
Article = __decorate([
    (0, Descriptor_1.decriptor)('文章2')
], Article);
const ar = new Article();
(0, Descriptor_1.printObj2)(ar);
