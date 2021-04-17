"use strict";
const score = {
    scoreCount: null,
    scoreBlock: null,

    init() {
        this.scoreBlock = document.getElementById('score-block');
        this.resetScore();
    },
    updateScore() {
        this.scoreCount++;
        this.scoreBlock.textContent = `Текущий счёт: ${this.scoreCount}`;
    },
    resetScore() {
        this.scoreCount = 0;
        this.scoreBlock.textContent = `Текущий счёт: ${this.scoreCount}`;
    },
    winFoodCountReached() {
        this.scoreBlock.textContent = `Вы победили! Текущий счёт: ${this.scoreCount}`
    }
}

const barrier = {
    barriers: [],

    getPoints() {
        return this.barriers;
    },

    pushBarriers(rndPoint) {
        this.barriers.push(rndPoint);
    },

    reset() {
        this.barriers = [];
    },

    isOnPoint(point) {
        return this.getPoints().some(barrierPoint => barrierPoint.x === point.x && barrierPoint.y === point.y);
    }
};