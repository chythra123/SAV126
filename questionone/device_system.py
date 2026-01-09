from abc import ABC, abstractmethod

class Device(ABC):           
    def __init__(self):
        self._is_on = False  

    @abstractmethod
    def start(self):        
        pass                

    @abstractmethod          
    def stop(self):          
        pass

    @property               
    def is_on(self):        
        return self._is_on

                             
class Motor(Device):         
    def start(self):         
        if not self._is_on:  
            self._is_on = True 
            print("Motor has started") 
                                              
    def stop(self):      
        if self._is_on:  
            self._is_on = False 
            print("Motor has stopped") 
                      
class Light(Device):  
    def start(self):       
        if not self._is_on: 
            self._is_on = True 
            print("Light switched on") 

    def stop(self):      
        if self._is_on: 
            self._is_on = False 
            print("Light switched off") 
 
                           
class Controller:          
    def operate_device(self, device: Device):
        device.start()
        device.stop()



if __name__ == "__main__": 
    motor = Motor()       
    light = Light()
                                       
    motor_controller = Controller() 
    light_controller = Controller()

    motor_controller.operate_device(motor) 
    light_controller.operate_device(light) 


    
