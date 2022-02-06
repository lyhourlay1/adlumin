class EventLogsController < ApplicationController

    def isValid(numIp)
        hash = {private: false, public: false}
        if (numIp >= 10000000000 && numIp <= 10255255255)|| 
            (numIp >= 172016000000 && numIp <= 172031255255) ||
            (numIp >= 192168000000 && numIp <= 192168255255)
            hash[:private] = true
        elsif (numIp >= 1000000000 && numIp <= 9255255255)|| 
            (numIp >= 11000000000 && numIp <= 126255255255)|| 
            (numIp >= 128000000000 && numIp <= 172015255255 )|| 
            (numIp >= 172032000000 && numIp <= 191255255255 )|| 
            (numIp >= 192000000000 && numIp <= 192167255255 )|| 
            (numIp >= 192169000000 && numIp <= 223255255255 )
            hash[:public] = true
        end
        return hash
    end
    def create
        @eventLog = EventLog.new(event_log_params)
        logString = @eventLog.log
        @eventLog.log_id = logString.split(">")[0][1..-1].to_i
        @eventLog.source_IP = logString.split("src=")[1].split(" ")[0]
        @eventLog.destination_IP = logString.split("dst=")[1].split(" ")[0]


        arrSrc = @eventLog.source_IP.split(".")
        arrDst = @eventLog.destination_IP.split(".")
        i=1
        while(i< arrSrc.length)
            numStr = arrSrc[i]
            numDst = arrDst[i]
            while numStr.length < 3
                numStr= '0'+ numStr
            end
            while numDst.length < 3
                numDst = "0"+ numDst
            end
            arrDst[i]= numDst
            arrSrc[i]= numStr
            i+=1
        end

        numSrc = arrSrc.join("").to_i
        numDst = arrDst.join("").to_i
        hash = isValid(numSrc)

        @eventLog.source_private = hash[:private]
        @eventLog.source_valid = hash[:private] || hash[:public]

        hash = isValid(numDst)

        @eventLog.destination_private = hash[:private]
        @eventLog.destination_valid = hash[:private] || hash[:public]
        
        if(@eventLog.save)
            render :show
        else
            render json: @eventLog.errors.full_messages, status: 422
        end
    end

    def destroy
        eventLog = EventLog.find(params[:id])
        if eventLog.destroy
            @eventLogs = EventLog.all
            render :index
        else
            render json: eventLog.errors.full_messages, status: 422
        end
    end

    def index
        @eventLogs = EventLog.all
        render :index
    end

    def show
        @eventLog = EventLog.find_by(log_id: params[:log_id])
    end

    private
    def event_log_params
        params.require(:event_log).permit(:log)
    end
end
