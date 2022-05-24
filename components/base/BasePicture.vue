<template>
  <picture
    v-lazyload="!disableLazy"
    v-bind="{
      class: pictureClasses,
      ...(preloadFirst ? { rel: 'preload' } : {})
    }"
  >
    <template
      v-for="(source, index) in sources"
    >
      <source
        v-if="source.tag === 'source'"
        v-bind:key="`source-${index}`"
        v-bind="source"
      >
      <img
        v-else
        v-bind:key="`img-${index}`"
        v-bind="{ ...source, class: imgClasses, alt, ...$attrs }"
      >
    </template>
  </picture>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import getAssetPath from '~/utils/assets';

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: value => ['A', 'M D', 'M T SD LD', 'M T SD LD XLD'].includes(value)
    },
    alt: {
      type: String,
      required: true
    },
    isAlfa: { // if image has alfa channel, render avif, webp, png, otherwise avif, webp, jpg
      type: Boolean,
      default: false
    },
    isRetinaUploaded: {
      type: Boolean,
      default: true
    },
    disableLazy: {
      type: Boolean,
      default: false
    },
    pictureClasses: {
      type: [String, Object, Array],
      default: ''
    },
    imgClasses: {
      type: [String, Object, Array],
      default: ''
    },
    preloadFirst: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const extensions = [
      { extension: 'avif', type: 'image/avif' },
      { extension: 'webp', type: 'image/webp' },
      props.isAlfa
        ? { extension: 'png', type: 'image/png' }
        : { extension: 'jpg', type: 'image/jpeg' }
    ];
    const breakpoints = {
      A: [
        { name: 'A' }
      ],
      'M D': [
        { name: 'M', media: '(max-width: 1023px)' },
        { name: 'D', media: '(min-width: 1024px)' }
      ],
      'M T SD LD': [
        { name: 'M', media: '(max-width: 767px)' },
        { name: 'T', media: '(max-width: 1023px)' },
        { name: 'SD', media: '(max-width: 1439px)' },
        { name: 'LD', media: '(min-width: 1440px)' }
      ],
      'M T SD LD XLD': [
        { name: 'M', media: '(max-width: 767px)' },
        { name: 'T', media: '(max-width: 1023px)' },
        { name: 'SD', media: '(max-width: 1439px)' },
        { name: 'LD', media: '(max-width: 1919px)' },
        { name: 'XLD', media: '(min-width: 1920px)' }
      ]
    };

    const imgExt = props.isAlfa ? 'png' : 'jpg';
    const imgBp = {
      A: 'A',
      'M D': 'D',
      'M T SD LD': 'LD',
      'M T SD LD XLD': 'LD'
    }[props.type];

    const sources = [];

    breakpoints[props.type].forEach(bp => {
      extensions.forEach(ext => {
        const placeholder = props.isRetinaUploaded
          ? `${getAssetPath(`${props.path}/${bp.name}`, ext.extension, 'w_0.02')} 1x, ${getAssetPath(`${props.path}/${bp.name}`, ext.extension, 'w_0.02')} 2x`
          : `${getAssetPath(`${props.path}/${bp.name}`, ext.extension, 'w_0.02')}`;
        const image = props.isRetinaUploaded
          ? `${getAssetPath(`${props.path}/${bp.name}`, ext.extension, 'w_0.5')} 1x, ${getAssetPath(`${props.path}/${bp.name}`, ext.extension)} 2x`
          : `${getAssetPath(`${props.path}/${bp.name}`, ext.extension)}`;
        sources.push({
          tag: 'source',
          srcset: props.disableLazy ? image : placeholder,
          ...(!props.disableLazy && { 'data-src': image }),
          type: ext.type,
          ...(bp.media && { media: bp.media })
        });
      });
    });

    const imgPlaceholder = `${getAssetPath(`${props.path}/${imgBp}`, imgExt, 'w_0.02')}`;
    const imgImage = props.isRetinaUploaded
      ? getAssetPath(`${props.path}/${imgBp}`, imgExt, 'w_0.5')
      : getAssetPath(`${props.path}/${imgBp}`, imgExt);

    sources.push({
      tag: 'img',
      src: props.disableLazy ? imgImage : imgPlaceholder,
      ...(!props.disableLazy && { 'data-src': imgImage })
    });

    return { sources };
  }
});
</script>
