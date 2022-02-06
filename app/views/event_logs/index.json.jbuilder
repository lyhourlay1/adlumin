@eventLogs.each_with_index do |eventlog, index|
    json.extract! eventlog, :id, :id, :log_id, :source_IP, :destination_IP, 
        :source_valid, :source_private, :destination_valid, :destination_private
end