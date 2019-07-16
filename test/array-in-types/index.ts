interface SquareConfig {
  color: string
  width: number
}

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {SquareConfig[]} squareConfigs
 * @apiGroup arrayWithBracketsTest
 */

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {Array<SquareConfig>} squareConfigs
 * @apiGroup arrayAsGenericsTest
 */
