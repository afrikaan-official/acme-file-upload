FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /app

COPY AcmeFileUpload.API.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish AcmeFileUpload.API.csproj -c Development -o out

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app/out ./
ENTRYPOINT ["dotnet", "AcmeFileUpload.API.dll"]