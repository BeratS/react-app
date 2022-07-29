export default function RouterResolver() {
    return new Promise((resolve, _) => {
        resolve({ gender: 'male' });
    });
}