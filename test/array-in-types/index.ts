interface SquareConfig {
  color: string
  width: number
}

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {SquareConfig[]}
 * @apiGroup arrayWithBracketsTest
 */

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {Array<SquareConfig>}
 * @apiGroup arrayAsGenericsTest
 */
