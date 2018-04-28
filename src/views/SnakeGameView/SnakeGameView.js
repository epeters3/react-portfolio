import React from 'react';
import Hero from '../../components/Hero';
import Button from '../../components/Button';
import SnakeGame from '../../components/SnakeGame';
import styles from './style.css';
import { Col } from 'react-bootstrap';

const SnakeGameView = ({ hero, title, subtitle, cta }) => (
    <div>
        <h4>Coming Soon! Play The Game Snake!</h4>
        <Col sm={12} md={9}>
            <SnakeGame />
        </Col>
    </div>
);



export default SnakeGameView;
