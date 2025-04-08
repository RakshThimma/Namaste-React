import { sum } from "../sum";

test("sum of two nums" , () => {
    const result = sum(5,6);

    //Assertionnpm 
    expect(result).toBe(11);
})