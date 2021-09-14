const uri = `${process.env.REACT_APP_BASE_URL}/api`;

export const apiGet = async (path, params) => {
  let response;
  let query;
  if (params) {
    const coerced =
      typeof params === 'object' ?
        Object.entries(params)
            .filter(([k, v]) => v !== '' && v != null)
            .map(([k, v]) => [k, v.toString()]) :
        params;
    query = `?${new URLSearchParams(coerced).toString()}`;
  }

  try {
    response = await fetch(
      query ? `${uri}/${path}${query}` : `${uri}/${path}`)
        .then(async (res) => await res.json());
  } catch (error) {
    if (error.name === 'AbortError') return;

    throw error;
  }
  return response;
};

export const apiPost = async (path, {body, asForm, params}) => {
  let payload;
  let data;
  const header = new Headers({
    'Content-Type': 'application/json',
  });

  if (asForm && !body != null) {
    data = new FormData();
    for (const [key, value] of Object.entries(body)) {
      data.set(key, value);
    }
  } else if (body) {
    data = JSON.stringify(body);
  }
  try {
    await fetch(`${uri}/${path}`, {
      headers: header,
      method: 'POST',
      body: data,
    }).then((res) => (payload = res));
    return payload;
  } catch (error) {
    console.error(error.message);
  }
};

export const apiPut = async (path, {body, asForm, ...options}) => {
  let payload;
  let data;
  const header = new Headers({
    'Content-Type': 'application/json',
  });

  if (asForm && !body != null) {
    data = new FormData();
    for (const [key, value] of Object.entries(body)) {
      data.set(key, value);
    }
  } else if (body) {
    data = JSON.stringify(body);
  }
  try {
    await fetch(`${uri}/${path}`, {
      headers: header,
      method: 'PUT',
      body: data,
    }).then((res) => (payload = res));
    return payload;
  } catch (error) {
    console.error(error.message);
  }
};

export const apiDelete = async (path) => {
  let payload;
  const header = new Headers({
    'Content-Type': 'application/json',
  });
  try {
    payload = await fetch(`${uri}/${path}`, {
      headers: header,
      method: 'DELETE',
    });
    return payload;
  } catch (error) {
    console.error(error.message);
  }
};
