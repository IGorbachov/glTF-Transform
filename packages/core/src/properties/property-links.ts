import { Link } from '../graph';
import { Accessor } from './accessor';
import { Material } from './material';
import { Primitive } from './mesh';
import { Texture, TextureInfo, TextureSampler } from './texture';

/** @hidden */
export class TextureLink extends Link<Material, Texture> {
	public textureInfo = new TextureInfo();
	public sampler = new TextureSampler();
}

/** @hidden */
export class AttributeLink extends Link<Primitive, Accessor> {
	public semantic = '';
}

/** @hidden */
export class IndexLink extends Link<Primitive, Accessor> {}