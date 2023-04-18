/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import { __awaiter, __rest } from "tslib";
import axios from 'axios';
export var ContentType;
(function(ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));



export class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = (_b) => __awaiter(this, void 0, void 0, function*() {
            var { secure, path, type, query, format, body } = _b, params = __rest(_b, ["secure", "path", "type", "query", "format", "body"]);
            const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (yield this.securityWorker(this.securityData))) || {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData &&
                body &&
                body !== null &&
                typeof body === 'object') {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text &&
                body &&
                body !== null &&
                typeof body !== 'string') {
                body = JSON.stringify(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), {
                headers: Object.assign(Object.assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData ? { 'Content-Type': type } : {})),
                params: query,
                responseType: responseFormat,
                data: body,
                url: path
            }));
        });
        this.instance = axios.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || '/' }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), {
            headers: Object.assign(Object.assign(Object.assign({}, ((method &&
                this.instance.defaults.headers[method.toLowerCase()]) || {})), (params1.headers || {})), ((params2 && params2.headers) || {}))
        });
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem);
        } else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
/**
 * @title vkr
 * @version 1.0.0
 * @license ISC
 * @baseUrl /
 * @contact
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.ping = {
            /**
             * No description
             *
             * @tags Ping
             * @name GetPing
             * @request GET:/ping
             */
            getPing: (params = {}) => this.request(Object.assign({ path: `/ping`, method: 'GET', format: 'json' }, params)),
        };
        this.users = {
            /**
             * @description Получение всех пользователей
             *
             * @tags User
             * @name Get
             * @summary get
             * @request GET:/users
             * @secure
             */
            Get: (params = {}) => this.request(Object.assign({ path: `/users`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Создание пользователя
             *
             * @tags Auth, User
             * @name Create
             * @summary create
             * @request POST:/users
             */
            Create: (data, params = {}) => this.request(Object.assign({ path: `/users`, method: 'POST', body: data, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Получение пользователей по id
             *
             * @tags User
             * @name GetById
             * @summary get By Id
             * @request GET:/users/{id}
             * @secure
             */
            GetById: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Удаление пользователя. Удалить пользователя может только он сам
             *
             * @tags User
             * @name Delete
             * @summary delete
             * @request DELETE:/users/{id}
             */
            Delete: (id, params = {}) => this.request(Object.assign({ path: `/users/${id}`, method: 'DELETE', format: 'json' }, params)),
        };
        this.login = {
            /**
             * @description Авторизация
             *
             * @tags Auth
             * @name Login
             * @summary login
             * @request POST:/login
             */
            Login: (data, params = {}) => {

                return this.request(Object.assign({ path: `/login`, method: 'POST', body: data, type: ContentType.Json, format: 'json' }, params))
            },
        };
        this.logout = {
            /**
             * @description Выход
             *
             * @tags Auth
             * @name Logout
             * @summary logout
             * @request POST:/logout
             */
            Logout: (params = {}) => this.request(Object.assign({ path: `/logout`, method: 'POST' }, params)),
        };
        this.me = {
            /**
             * @description Профиль
             *
             * @tags Auth
             * @name Me
             * @summary me
             * @request GET:/me
             * @secure
             */
            Me: (params = {}) => this.request(Object.assign({ path: `/me`, method: 'GET', secure: true, format: 'json' }, params)),
        };
        this.taskStatuses = {
            /**
             * @description Получение всех статусов
             *
             * @tags TaskSatuses
             * @name Get
             * @summary get
             * @request GET:/task-statuses
             * @secure
             */
            Get: (params = {}) => this.request(Object.assign({ path: `/task-statuses`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Создание статуса
             *
             * @tags Auth, TaskSatuses
             * @name Create
             * @summary create
             * @request POST:/task-statuses
             */
            Create: (data, params = {}) => this.request(Object.assign({ path: `/task-statuses`, method: 'POST', body: data, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Получение статуса по id
             *
             * @tags TaskSatuses
             * @name GetById
             * @summary get By Id
             * @request GET:/task-statuses/{id}
             * @secure
             */
            GetById: (id, params = {}) => this.request(Object.assign({ path: `/task-statuses/${id}`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Удаление статуса
             *
             * @tags TaskSatuses
             * @name Delete
             * @summary delete
             * @request DELETE:/task-statuses/{id}
             */
            Delete: (id, data, params = {}) => this.request(Object.assign({ path: `/task-statuses/${id}`, method: 'DELETE', body: data, type: ContentType.Json, format: 'json' }, params)),
        };
        this.tasks = {
            /**
             * @description Получение всех задач с фильтрами
             *
             * @tags Tasks
             * @name Get
             * @summary get
             * @request GET:/tasks
             * @secure
             */
            Get: (query, params = {}) => this.request(Object.assign({ path: `/tasks`, method: 'GET', query: query, secure: true, format: 'json' }, params)),
            /**
             * @description Создание задачу
             *
             * @tags Tasks
             * @name Create
             * @summary create
             * @request POST:/tasks
             */
            Create: (data, params = {}) => this.request(Object.assign({ path: `/tasks`, method: 'POST', body: data, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Получение задачи по id
             *
             * @tags Tasks
             * @name GetById
             * @summary get By Id
             * @request GET:/tasks/{id}
             * @secure
             */
            GetById: (id, params = {}) => this.request(Object.assign({ path: `/tasks/${id}`, method: 'GET', secure: true, format: 'json' }, params)),
            /**
             * @description Редактирование задачи
             *
             * @tags Tasks
             * @name Update
             * @summary update
             * @request PUT:/tasks/{id}
             */
            Update: (id, data, params = {}) => this.request(Object.assign({ path: `/tasks/${id}`, method: 'PUT', body: data, type: ContentType.Json, format: 'json' }, params)),
            /**
             * @description Удаление задачи. Удалить задачу может только он автор
             *
             * @tags Tasks
             * @name Delete
             * @summary delete
             * @request DELETE:/tasks/{id}
             */
            Delete: (id, params = {}) => this.request(Object.assign({ path: `/tasks/${id}`, method: 'DELETE', format: 'json' }, params)),
        };
    }
}

export const apiService = new Api({
    withCredentials: true,
    baseURL: "http://localhost/api/",
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
    },
});
//# sourceMappingURL=swagger.js.map