export const getUserParams = () => {
    const search = window.location.search; // returns the URL query String
    const params = new URLSearchParams(search);
    const userRole = params.get('role');
    return userRole;
}