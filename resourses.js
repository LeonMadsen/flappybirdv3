const RESOURCE_TYPE = {
	IMAGE: 'image',
}


class ResourceLoader {
_typeLoadersMap = {
	[RESOURCE_TYPE.IMAGE]: async ({ src, width, height }) => {
return new Promise( executor: (resolve, reject) => {
const image = new Image(width, height)
image.addEventListener( type: 'load', listener: () => resolve(image))
image.addEventListener( type: 'error', listener: (error :ErrorEvent) => reject(error))
image.src = src
	})
},
}

async load(resource) {
const loader = this._typeLoadersMap[resource.type]
return await loader(resource)
}
}


