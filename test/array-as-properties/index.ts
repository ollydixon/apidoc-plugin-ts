interface SquareConfig2 {
  color: string
  width: number
}

interface SquareConfigsInterface2 {
  squares: SquareConfig2[]
}

interface SquareConfigsGeneric2 {
  squares: Array<SquareConfig2>
}

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {SquareConfigsInterface2}
 * @apiGroup arrayAsInterface
 */

/**
 * @api {get} /api/:id
 * @apiParam {SquareConfig} id Unique ID.
 * @apiInterface {SquareConfigsGeneric2}
 * @apiGroup arrayGenericsTest
 */
