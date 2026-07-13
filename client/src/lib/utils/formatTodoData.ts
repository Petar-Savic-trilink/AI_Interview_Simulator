export const formatTodoState = (state: number) => {
    switch(state){
        case 0: return "Done";
        case 1: return "In Progress";
        case 2: return "Dropped";
    }
}

export const formatTodoTime = (time: string) => {
    const timeArr: number[] = time.split(':').map(Number);
    const hours = timeArr[0] !== 0 ? `${timeArr[0]}h ` : ''; 
    const minutes = timeArr[1] !== 0 ? `${timeArr[1]}m ` : ''; 
    const seconds = timeArr[2] !== 0 ? `${timeArr[2]}s ` : '';
    
    const result = hours + minutes + seconds

    return result.trim() == '' ? '0s' : result
}