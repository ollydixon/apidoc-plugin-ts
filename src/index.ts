import { Project as Ast } from 'ts-morph'
import { parseElementsApiInterface } from './apiInterface'
import { Apidoc } from './api_doc_namespace'

export const APIDOC_PLUGIN_TS_CUSTOM_ELEMENT_NAME = 'apiinterface'


const ast = new Ast()
export { ast }

/**
 * Initialise plugin (add app hooks)
 * @param app
 */
export function init(app: Apidoc.App) {
  app.addHook(Apidoc.AvailableHook['parser-find-elements'], parseElementsApiInterface.bind(app), 200)
}

