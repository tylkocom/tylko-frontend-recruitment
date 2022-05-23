// https://res.cloudinary.com/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<public_id>.<extension>
const provider = 'https://res.cloudinary.com';
const cloudName = 'cstm';
const assetType = 'image';
const deliveryType = 'upload';
const version = 'v1';

type ImageExtension = 'jpg' | 'png' | 'webp' | 'avif' | 'svg'

const getAssetPath = (path: string, extension: ImageExtension, transformations?: string) => {
  const urlProperties = [provider, cloudName, assetType, deliveryType, transformations, version, path];
  const base = urlProperties.filter(Boolean).join('/');
  return `${base}.${extension}`;
};

export default getAssetPath;
