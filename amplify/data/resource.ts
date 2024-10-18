import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    PokemonType: a
      .model({
        id: a.id().required(),
        name: a.string().required(),
        pokemons: a.hasMany("Pokemon", "typeId"),
      })
      .identifier(["id"]),

    Pokemon: a
      .model({
        id: a.id().required(),
        name: a.string().required(),
        typeId: a.id().required(),
        type: a.belongsTo("PokemonType", "typeId"),
      })
      .identifier(["id"]),
  })
  .authorization((allow) => [allow.guest()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
