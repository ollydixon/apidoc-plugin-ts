interface SquareConfig2 {
  color: string
  width: number
}


interface SquareConfigsInterface2 {
  squares: Array<SquareConfig2>
}

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {SquareConfigsInterface2}
 * @apiGroup arrayGenericsTest
 */

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {SquareConfig2[]}
 * @apiGroup arrayAsInterface
 */

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {Array<SquareConfig2>}
 * @apiGroup arrayGenericsTest
 */
