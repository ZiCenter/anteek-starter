import('@zicenter/anteek-core')
    .then(({ bootstrap }) => bootstrap())
    .catch(e => console.error('error starting anteek server', e));
