import { get } from './api'

//Exemplos
const changeExpression = async (expressionNumber) => get(`/led/changeExpression/${expressionNumber}`);
const changeExpressionByBits = async (expressionBits) => get(`/led/ changeExpressionByBits/${expressionBits}`);
const getExpressionList = async () => get(`/led/getExpressionList`);

//Link para ajuda https://dev.to/nilanth/how-to-use-axios-in-an-optimized-and-scalable-way-with-react-518n


export { changeExpression, changeExpressionByBits, getExpressionList }