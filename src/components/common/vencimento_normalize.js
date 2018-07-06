const normalizeVencimento = value => 
{
  if (!value) 
  {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 2) 
  {
    return onlyNums;
  }

  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2,6)}`;
}

export default normalizeVencimento;