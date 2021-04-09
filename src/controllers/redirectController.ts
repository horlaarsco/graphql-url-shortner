import client from '../config/db'
import { Request, Response } from 'express'

const redirectController = async (req: Request, res: Response) => {
  client.query(
    'SELECT * FROM urls WHERE destination = $1',
    [req.params.slug],
    (error, results) => {
      if (!results.rows[0] || error) {
        return res.status(404).send('No url found')
      }

      return res.redirect(results.rows[0].source)
    }
  )
}

export { redirectController }
