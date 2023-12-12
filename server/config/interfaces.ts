import { Request, Response} from 'express';

interface RouteProps {
    req: Request,
    res: Response
}

export type { RouteProps }