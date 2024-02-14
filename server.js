import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
})

fastify.route({
  method: 'POST',
  url: '/v1/pets',
  schema: {
    body: {
      type: 'object',
      properties: {
          name: { type: 'string'},
          type: { type: 'string', enum: ['cat', 'dog'] }
      },
      required: ['name', 'type'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  handler: async (request, reply) => {
    // await someAsyncMethod(request.body);
    // await doSomethingElse();
    return { hello: 'world' }
  }
})

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
