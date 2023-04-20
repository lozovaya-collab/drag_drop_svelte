const { generateApi } = require('swagger-typescript-api')
const path = require('path')
const ACTION_METHODS = ['post', 'put', 'patch']
const _ = require('lodash')

const generateOperationId = (routeInfo) => {
    const { method, route, moduleName, pathArgs, summary } = routeInfo
    if (summary) {
        return (summary.charAt(0).toUpperCase() + summary.slice(1)).replaceAll(
            ' ',
            '',
        )
    } else {
        const usageRoutePart =
            _.split(route, moduleName)[1] ||
            _.split(route, _.kebabCase(moduleName))[1]
        const parts = _.split(route, '/')
        const lastPart = _.last(parts)

        const firstPathArg = pathArgs[0]

        if (!usageRoutePart) {
            return _.camelCase(`${method}_${moduleName}`)
        }

        return _.camelCase(
            _.compact([
                ACTION_METHODS.includes(method) ? '' : method,
                lastPart,
                ...(firstPathArg && firstPathArg.name !== lastPart ? ['by', firstPathArg.name] : []),
            ]).join('_'),
        )
    }
}
generateApi({
    // Имя конечного файла
    name: 'swagger.ts',
    // Путь для сохранения
    output: path.resolve(process.cwd(), './src/shared/api/swagger'),
    // Адрес до JSON swagger'а
    url: 'http://localhost/api/static/swagger.json',
    // Клиент fetch/axios
    httpClientType: 'axios',
    // Форматирование названий методов. Необязательный конфиг
    hooks: {
        onFormatRouteName: (routeInfo, templateRouteName) => {
            // if (!routeInfo.operationId) {
            return generateOperationId(routeInfo) // this is my custom generation route name
                // }

            // return templateRouteName // this is generated route name from swagger-typescript-api
        },
        onPrepareConfig: (configuration) => {
            // configuration.routes.combined = configuration.routes.combined.filter(route => route.moduleName !== "ws")
        },
    },
})