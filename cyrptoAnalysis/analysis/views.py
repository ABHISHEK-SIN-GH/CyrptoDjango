import json
from django.shortcuts import render
from django.http import HttpResponse
import requests

def home(request):

    # url = "https://alpha-vantage.p.rapidapi.com/query"
    # querystring = {"market":"INR","symbol":"BTC","function":"DIGITAL_CURRENCY_DAILY"}
    # headers = {
    #     "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    #     "X-RapidAPI-Key": "951c8f73ffmsh7c75e911dd0d131p179ca6jsn4a63e79cd0b3"
    # }
    # response = requests.request("GET", url, headers=headers, params=querystring)
    # response = response.json()

    # with open('data.json', 'w') as jsonfile:
    #     json.dump(response, jsonfile)
    f = open('data.json')
    response = json.load(f)

    meta = response["Meta Data"]
    info = meta["1. Information"]
    dcc = meta["2. Digital Currency Code"]
    dcn = meta["3. Digital Currency Name"]
    mc = meta["4. Market Code"]
    mn = meta["5. Market Name"]
    lrf = meta["6. Last Refreshed"]
    tz = meta["7. Time Zone"]

    tseries = response["Time Series (Digital Currency Daily)"]
    count = 0
    dataset = []
    for i in tseries:
        if(count<100):
            count += 1  
            openINR = tseries[i]["1a. open (INR)"]
            openUSD = tseries[i]["1b. open (USD)"]
            highINR = tseries[i]["2a. high (INR)"]
            highUSD = tseries[i]["2b. high (USD)"]
            lowINR = tseries[i]["3a. low (INR)"]
            lowUSD = tseries[i]["3b. low (USD)"]
            closeINR = tseries[i]["4a. close (INR)"]
            closeUSD = tseries[i]["4b. close (USD)"]
            vol = tseries[i]["5. volume"]
            mcap = tseries[i]["6. market cap (USD)"]
            date = i
            dataset.append(dict({'o':openINR,'h':highINR,'l':lowINR,'c':closeINR,'v':vol,'m':mcap,'d':date}))
    dataset = json.dumps(dataset)   
    datasetDJ = json.loads(dataset) 

    # print(dataset)             
    # return HttpResponse(dataset)
    return render(request,'analysis/home.html',{'data':dataset,'data1':datasetDJ})
 