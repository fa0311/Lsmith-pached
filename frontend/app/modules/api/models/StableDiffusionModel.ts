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
/**
 *
 * @export
 * @interface StableDiffusionModel
 */
export interface StableDiffusionModel {
    /**
     *
     * @type {string}
     * @memberof StableDiffusionModel
     */
    model_id: string
}

/**
 * Check if a given object implements the StableDiffusionModel interface.
 */
export function instanceOfStableDiffusionModel(value: object): boolean {
    let isInstance = true
    isInstance = isInstance && 'model_id' in value

    return isInstance
}

export function StableDiffusionModelFromJSON(json: any): StableDiffusionModel {
    return StableDiffusionModelFromJSONTyped(json, false)
}

export function StableDiffusionModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean,
): StableDiffusionModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        model_id: json['model_id'],
    }
}

export function StableDiffusionModelToJSON(value?: StableDiffusionModel | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        model_id: value.model_id,
    }
}
