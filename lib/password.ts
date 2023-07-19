import CryptoJS from 'crypto-js';
// 암호화
export const encrypt = (password: string) => {

    if (!password) return '';
    return CryptoJS.AES.encrypt(password, process.env.NEXT_PUBLIC_CREATE_KEY!).toString();
}
// 복호화
export const decrypt = (password: string) => {
    if (!password) return '';

    try {
        const bytes = CryptoJS.AES.decrypt(password, process.env.NEXT_PUBLIC_CREATE_KEY!); // 복호화 시도
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Decryption error:', error); // 에러 로깅
        return ''; // 에러 발생 시 빈 문자열 반환
    }
}