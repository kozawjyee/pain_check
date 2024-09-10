import React from 'react';
import { lazy } from 'react';
import Layout from '../layout';
import { RouteObject } from 'react-router-dom';
// import Finger from '../pages/symptons/finger';
// import Abdominal from '../pages/symptons/abdominal';

const AbdominalPage = lazy(() => import('../pages/symptons/abdominal'));
const FingerPage = lazy(() => import('../pages/symptons/finger'));

export const paths: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'finger',
                element: <FingerPage />
            },
            {
                path: 'abdominal',
                element: <AbdominalPage />
            }
        ]
    },
];