export default function* counter(initial){
    let initial_value = 0;
    while(true){
        yield initial_value++;
    }
}
