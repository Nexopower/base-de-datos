export const conf = {
  host: "MILAPTOP\\LAPTOPSQL",
  port: "61894" ,
  user: "gerson",
  password: "nexopower",
  db: "clinica",
  dialect: "mssql",
  pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
  }
}