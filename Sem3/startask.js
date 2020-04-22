<script type="module">{
    import gc from './j/goss_concat';
    const star = '⭐️';
    const length = 5;
    const arr = Array.from({ length : length }).map(el => el = star);
    // здесь код, который цепочкой методов .from  и .map формирует массив из length звёзд
    const res = arr.join('');
    //const res = gc(arr); - не работает(
    // здесь код, который использует функцию gc для преобразования этого массива в строку из звёзд вместо метода .join
    Out.log(res);
}</script>