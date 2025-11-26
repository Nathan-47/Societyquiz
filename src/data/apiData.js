async function getData() {
    const res = await fetch('https://www.bcusu.com/svc/feeds/groups/6007/?subtree=true&types=SOC');
    const data = await res.json();
    return data;
}