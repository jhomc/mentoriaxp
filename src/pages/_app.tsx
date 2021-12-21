import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    employee: Model,
  },

  seeds(server) {
    server.db.loadData({
      employees: [
        {
          id: 1,
          name: "Jhonata Martins da Costa",
          CPF: "07201406922",
          birthDate: 28081989,
          email: "jhomcosta@gmail.com",
          phone: "41996196231",
          status: "Ativo",
          CEP: 81210110,
          street: "Olderico Gabardo",
          addressNumber: 316,
          neighborhood: "Xaxim",
          city: "Curitiba",
          province: "PR",
          job: "Desenvoldevor Junior",
          salary: 5000,
          boss: "Felipe Palma",
          createdAt: new Date('02-12-2021'),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/employees", () => {
      return this.schema.all("employee");
    });

    this.post("/employees", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("employee", data);
    });
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
