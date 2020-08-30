import React from 'react';
import {getLessThenTwoArDie, getLessThenTwoArDie2, getTwoThreeLives, getFourDies, getDeadThreeLives}
from "./components/gamelife/utils/generatorTestArray";
import TransformNumbers
  from "./components/gamelife/service/TransformNumbers";



let transform = new TransformNumbers();

describe('live game tests', ()=> {
  it('cell with fewer than two live neighbors dies', ()=>{
    const array = getLessThenTwoArDie();
    const resAr = transform.getNumbers(array)

    const expVar = resAr.flatMap(a => a).reduce((start, cur)=>{
      start += cur
      return start
    })
    expect(expVar).toEqual(0);

  })
  it('cell with fewer than two live neighbors dies2', ()=>{
    const array = getLessThenTwoArDie2();
    const resAr = transform.getNumbers(array)

    const expVar = resAr.flatMap(a => a).reduce((start, cur)=>{
      start += cur
      return start
    })
    expect(expVar).toEqual(0);

  })
  it('cell with two or three live neighbours lives', ()=>{
    const array = getTwoThreeLives();
    const resAr = transform.getNumbers(array)

    const expVar = resAr.flatMap(a => a).reduce((start, cur)=>{
      start += cur
      return start
    })
    expect(expVar).toEqual(1);
  })
  it('cell with more than three live neighbours dies ', ()=>{
    const array = getFourDies();
    const resAr = transform.getNumbers(array)

    const expVar = resAr.flatMap(a => a).reduce((start, cur)=>{
      start += cur
      return start
    })
    // console.log("expVar", resAr)
    expect(expVar).toEqual(8);
    expect(resAr[1][1]).toEqual(0);
    // expect().toEqual(3);
  })
  it(' dead cell with exactly three live neighbours becomes a live', ()=>{
    const array = getDeadThreeLives();
    const resAr = transform.getNumbers(array)

    const expVar = resAr.flatMap(a => a).reduce((start, cur)=>{
      start += cur
      return start
    })
    expect(resAr[1][1]).toEqual(1);
  })
})