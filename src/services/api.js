const api = 'https://foods-json-server.lucachaves.repl.co';

async function create(food) {
  const res = await fetch(`${api}/foods`, {
    method: 'post',
    body: JSON.stringify(food),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}

async function readAll() {
  const res = await fetch(`${api}/foods`);

  return await res.json();
}

async function read(id) {
  const res = await fetch(`${api}/foods/${id}`);

  return await res.json();
}

async function readByName(name) {
  const res = await fetch(`${api}/foods?name=${name}`);

  return await res.json();
}

async function update(id, food) {
  const res = await fetch(`${api}/foods/${id}`, {
    method: 'put',
    body: JSON.stringify(food),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}

async function remove(id) {
  await fetch(`${api}/foods/${id}`, {
    method: 'delete',
  });
}

export default { create, readAll, read, readByName, update, remove };
