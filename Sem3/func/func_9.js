const cc = (x = 0) => () => ++x;
cc()(); //1
cc(1)(); //2
cc(2)(); //3