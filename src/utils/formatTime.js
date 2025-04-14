const formatTime = (seconds) => {
    // 시간: 초 / 3600 
    // 분: 초 % 3600 / 60
    // 초: 초 % 60
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;;
}
export default formatTime;