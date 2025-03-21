"use client";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

export default function HomePage() {
  const [searchType, setSearchType] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [congregation, setCongregation] = useState("");

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
    setSearchValue("");
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCongregationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCongregation(e.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center h-screen p-6">
      <div className="w-full mb-6">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Gestão de membros</h1>
        </div>
      </div>
      <form className="mb-6 w-full">
        <div className="flex space-x-4 mb-4">
          <div className="form-control w-full max-w-xs">
            <label htmlFor="searchType" className="label">
              <span className="label-text">Buscar por</span>
            </label>
            <select
              id="searchType"
              value={searchType}
              onChange={handleSearchTypeChange}
              className="select select-bordered"
            >
              <option value="name">Nome</option>
              <option value="cpf">CPF</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label htmlFor="searchValue" className="label">
              <span className="label-text">
                {searchType === "name" ? "Nome" : "CPF"}
              </span>
            </label>
            <input
              id="searchValue"
              type="text"
              value={searchValue}
              onChange={handleSearchValueChange}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label htmlFor="congregation" className="label">
              <span className="label-text">Congregação</span>
            </label>
            <select
              id="congregation"
              value={congregation}
              onChange={handleCongregationChange}
              className="select select-bordered"
            >
              <option value="">Selecione</option>
              <option value="congregation1">Congregação 1</option>
              <option value="congregation2">Congregação 2</option>
              <option value="congregation3">Congregação 3</option>
            </select>
          </div>
        </div>
      </form>

      <div className="overflow-x-auto w-full border border-solid rounded-md">
        <table className="table w-full ">
          <thead>
            <tr>
              <th className="text-lg">Nome</th>
              <th className="text-lg">CPF</th>
              <th className="text-lg">Congregação</th>
              <th className="text-lg">Status de Dizimista</th>
              <th className="text-lg">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João Silva</td>
              <td>123.456.789-00</td>
              <td>Congregação 1</td>
              <td>Ativo</td>
              <td>
                <button className="btn btn-sm mr-2">
                  <VisibilityIcon />
                </button>
                <button className="btn btn-sm">
                  <EditIcon />
                </button>
              </td>
            </tr>
            {/* Adicione mais linhas conforme necessário */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
