import '../config';
import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      req.email = payload.email;
      next();
    });
  }