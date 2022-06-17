# Indonesia Administrative Area

We provide list of Province (Provinsi), City (Kota), Administrative Area 3 (Kecamatan) and Administrative Area 4 (Kelurahan) in Indonesia as Static API (HTML-JSON)

# API Format

## Get Provinces List (Provinsi)

> Method: GET
>
> Path: /

## Get Cities List (Kota)

> Method: GET
>
> Path: /{provinceId}

## Get Administrative Area 3 List (Kecamatan)

> Method: GET
>
> Path: /{provinceId}/{cityId}

## Get Administrative Area 4 List (Kecamatan)

> Method: GET
>
> Path: /{provinceId}/{cityId}/{administrativeArea3Id}

# API Response

All of our endpoint will return the similar format

**The Response**

```
{
    "areas": Object[]
}
```

**The Areas**

```
{
    "id": Number,
    "name": String,
    "short": String (Optional)
}
```

# Code Examples

Here is some example of how to use our Static API

## Javascript

**Fetch**

> TODO: Example Code

**Axios**

> TODO: Example Code

## PHP

**Curl**

> TODO: Example Code