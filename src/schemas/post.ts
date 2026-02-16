export default {
  name: 'post',
  title: 'Entradas del Diario',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Link (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Foto Principal',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar la foto
      },
    },
    {
      name: 'categories',
      title: 'Categoría',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Cuerpo del Texto',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}
      ],
    },
  ],
}