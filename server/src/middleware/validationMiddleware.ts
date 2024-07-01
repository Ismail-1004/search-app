import { Response, Request, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

const validateSearch = [
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
  body('number').optional().matches(/^\d{2}-\d{2}-\d{2}$/).withMessage('Number format should be ##-##-##'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export default validateSearch;