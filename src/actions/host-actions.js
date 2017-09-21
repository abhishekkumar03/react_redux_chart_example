export const GET_HOSTS = 'GET_HOSTS';

export const getHosts = hosts => ({
    type: GET_HOSTS,
    hosts: hosts,
})
