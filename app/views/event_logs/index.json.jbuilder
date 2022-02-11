@eventLogs.each_with_index do |eventlog, index|
    json.set! eventlog.id do

        json.extract! eventlog, :id, :log_id, :source_IP, :destination_IP, 
            :source_valid, :source_private, :destination_valid, :destination_private
    end
end