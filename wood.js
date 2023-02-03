function woodcal (chair,table,bed){
    const perchair =3;
    const pertable = 10;
    const perbedwood = 50;

    const chairwood = chair * perchair
    const tablewood = table * pertable
    const bedwood = bed * perbedwood
    console.log(chairwood,tablewood,bedwood);
    const totall = chairwood + tablewood+bedwood
    console.log('totall cost is ', totall);
}
const totall = woodcal (2,2,5)
