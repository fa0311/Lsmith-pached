/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
import type { ImageGenerationResult } from './ImageGenerationResult'
import {
    ImageGenerationResultFromJSON,
    ImageGenerationResultFromJSONTyped,
    ImageGenerationResultToJSON,
} from './ImageGenerationResult'

/**
 *
 * @export
 * @interface GenerateImageResponseModel
 */
export interface GenerateImageResponseModel {
    /**
     *
     * @type {string}
     * @memberof GenerateImageResponseModel
     */
    status: string
    /**
     *
     * @type {string}
     * @memberof GenerateImageResponseModel
     */
    message?: string
    /**
     *
     * @type {ImageGenerationResult}
     * @memberof GenerateImageResponseModel
     */
    data: ImageGenerationResult
}

/**
 * Check if a given object implements the GenerateImageResponseModel interface.
 */
export function instanceOfGenerateImageResponseModel(value: object): boolean {
    let isInstance = true
    isInstance = isInstance && 'status' in value
    isInstance = isInstance && 'data' in value

    return isInstance
}

export function GenerateImageResponseModelFromJSON(json: any): GenerateImageResponseModel {
    return GenerateImageResponseModelFromJSONTyped(json, false)
}

export function GenerateImageResponseModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean,
): GenerateImageResponseModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        status: json['status'],
        message: !exists(json, 'message') ? undefined : json['message'],
        data: ImageGenerationResultFromJSON(json['data']),
    }
}

export function GenerateImageResponseModelToJSON(value?: GenerateImageResponseModel | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        status: value.status,
        message: value.message,
        data: ImageGenerationResultToJSON(value.data),
    }
}
