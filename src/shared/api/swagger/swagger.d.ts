export interface PingResponse {
    message: string;
}
export interface User {
    /** @format double */
    id: number;
    login: string;
}
export interface UserNotAuthorized {
    message: 'User not authorized';
}
export interface InternalServerErrorResponse {
    message: 'Internal Server Error';
}
export interface UserValidateError {
    message: 'Validation failed';
    details: {
        password: boolean;
        login: boolean;
    };
}
/** From T, pick a set of properties whose keys are in the union K */
export interface PickUserWithPasswordExcludeKeysId {
    password: string;
    login: string;
}
/** Construct a type with the properties of T except for those in type K. */
export type OmitUserWithPasswordId = PickUserWithPasswordExcludeKeysId;
export type UserCreateParams = OmitUserWithPasswordId;
export interface UserAuthorizationFailed {
    message: 'Authorization failed';
}
export interface TaskStatuses {
    /** @format double */
    id: number;
    name: string;
}
export interface QueryParamsValidateError {
    message: 'Validation failed';
    details: Record<string, boolean>;
}
export interface TaskStatusesValidateError {
    message: 'Validation failed';
    details: {
        name: boolean;
    };
}
/** From T, pick a set of properties whose keys are in the union K */
export interface PickTaskStatusesExcludeKeysId {
    name: string;
}
/** Construct a type with the properties of T except for those in type K. */
export type OmitTaskStatusesId = PickTaskStatusesExcludeKeysId;
export type TaskStatusesCreateParams = OmitTaskStatusesId;
export interface Task {
    /** @format double */
    id: number;
    /** @format double */
    status_id: number;
    /** @format double */
    author_id: number;
    created_date: string;
    update_date: string;
    title: string;
    description: string | null;
}
export interface TaskValidateError {
    message: 'Validation failed';
    details: {
        status_id?: boolean;
        author_id?: boolean;
        description?: boolean;
        title?: boolean;
        id?: boolean;
    };
}
/** From T, pick a set of properties whose keys are in the union K */
export interface PickTaskCreateParamsExcludeKeysAuthorId {
    title: string;
    description: string | null;
    /** @format double */
    status_id: number;
}
/** Construct a type with the properties of T except for those in type K. */
export type OmitTaskCreateParamsAuthorId = PickTaskCreateParamsExcludeKeysAuthorId;
/** From T, pick a set of properties whose keys are in the union K */
export interface PickTaskUpdateParamsExcludeKeysId {
    title?: string;
    description?: string;
    /** @format double */
    status_id?: number;
}
/** Construct a type with the properties of T except for those in type K. */
export type OmitTaskUpdateParamsId = PickTaskUpdateParamsExcludeKeysId;
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T, any>>;
}
/**
 * @title vkr
 * @version 1.0.0
 * @license ISC
 * @baseUrl /
 * @contact
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    ping: {
        /**
         * No description
         *
         * @tags Ping
         * @name GetPing
         * @request GET:/ping
         */
        getPing: (params?: RequestParams) => Promise<AxiosResponse<PingResponse, any>>;
    };
    users: {
        /**
         * @description Получение всех пользователей
         *
         * @tags User
         * @name Get
         * @summary get
         * @request GET:/users
         * @secure
         */
        Get: (params?: RequestParams) => Promise<AxiosResponse<User[], any>>;
        /**
         * @description Создание пользователя
         *
         * @tags Auth, User
         * @name Create
         * @summary create
         * @request POST:/users
         */
        Create: (data: UserCreateParams, params?: RequestParams) => Promise<AxiosResponse<User, any>>;
        /**
         * @description Получение пользователей по id
         *
         * @tags User
         * @name GetById
         * @summary get By Id
         * @request GET:/users/{id}
         * @secure
         */
        GetById: (id: string, params?: RequestParams) => Promise<AxiosResponse<User | null, any>>;
        /**
         * @description Удаление пользователя. Удалить пользователя может только он сам
         *
         * @tags User
         * @name Delete
         * @summary delete
         * @request DELETE:/users/{id}
         */
        Delete: (id: string, params?: RequestParams) => Promise<AxiosResponse<boolean, any>>;
    };
    login: {
        /**
         * @description Авторизация
         *
         * @tags Auth
         * @name Login
         * @summary login
         * @request POST:/login
         */
        Login: (data: UserCreateParams, params?: RequestParams) => Promise<AxiosResponse<User, any>>;
    };
    logout: {
        /**
         * @description Выход
         *
         * @tags Auth
         * @name Logout
         * @summary logout
         * @request POST:/logout
         */
        Logout: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    };
    me: {
        /**
         * @description Профиль
         *
         * @tags Auth
         * @name Me
         * @summary me
         * @request GET:/me
         * @secure
         */
        Me: (params?: RequestParams) => Promise<AxiosResponse<User, any>>;
    };
    taskStatuses: {
        /**
         * @description Получение всех статусов
         *
         * @tags TaskSatuses
         * @name Get
         * @summary get
         * @request GET:/task-statuses
         * @secure
         */
        Get: (params?: RequestParams) => Promise<AxiosResponse<TaskStatuses[], any>>;
        /**
         * @description Создание статуса
         *
         * @tags Auth, TaskSatuses
         * @name Create
         * @summary create
         * @request POST:/task-statuses
         */
        Create: (data: TaskStatusesCreateParams, params?: RequestParams) => Promise<AxiosResponse<TaskStatuses, any>>;
        /**
         * @description Получение статуса по id
         *
         * @tags TaskSatuses
         * @name GetById
         * @summary get By Id
         * @request GET:/task-statuses/{id}
         * @secure
         */
        GetById: (id: string, params?: RequestParams) => Promise<AxiosResponse<TaskStatuses | null, any>>;
        /**
         * @description Удаление статуса
         *
         * @tags TaskSatuses
         * @name Delete
         * @summary delete
         * @request DELETE:/task-statuses/{id}
         */
        Delete: (id: string, data: string, params?: RequestParams) => Promise<AxiosResponse<boolean, any>>;
    };
    tasks: {
        /**
         * @description Получение всех задач с фильтрами
         *
         * @tags Tasks
         * @name Get
         * @summary get
         * @request GET:/tasks
         * @secure
         */
        Get: (query?: {
            author_id?: number[];
            status_id?: number[];
        }, params?: RequestParams) => Promise<AxiosResponse<Task[], any>>;
        /**
         * @description Создание задачу
         *
         * @tags Tasks
         * @name Create
         * @summary create
         * @request POST:/tasks
         */
        Create: (data: OmitTaskCreateParamsAuthorId, params?: RequestParams) => Promise<AxiosResponse<Task, any>>;
        /**
         * @description Получение задачи по id
         *
         * @tags Tasks
         * @name GetById
         * @summary get By Id
         * @request GET:/tasks/{id}
         * @secure
         */
        GetById: (id: string, params?: RequestParams) => Promise<AxiosResponse<Task | null, any>>;
        /**
         * @description Редактирование задачи
         *
         * @tags Tasks
         * @name Update
         * @summary update
         * @request PUT:/tasks/{id}
         */
        Update: (id: number, data: OmitTaskUpdateParamsId, params?: RequestParams) => Promise<AxiosResponse<Task, any>>;
        /**
         * @description Удаление задачи. Удалить задачу может только он автор
         *
         * @tags Tasks
         * @name Delete
         * @summary delete
         * @request DELETE:/tasks/{id}
         */
        Delete: (id: string, params?: RequestParams) => Promise<AxiosResponse<boolean, any>>;
    };
}
//# sourceMappingURL=swagger.d.ts.map